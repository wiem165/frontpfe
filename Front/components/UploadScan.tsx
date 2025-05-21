"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, ImagePlus, Loader2, RotateCcw } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function UploadScan() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    bone_type: string;
    result: string;
    image_url: string;
  } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return toast.error("Please select a file.");

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();

      // ✅ Vérification du bone_type
      if (
        !["elbow", "hand", "shoulder"].includes(data.bone_type.toLowerCase())
      ) {
        toast.error("Invalid scan. Please upload a valid elbow, hand, or shoulder X-ray.");
        setResult(null);
        return;
      }

      setResult(data);
      toast.success("Prediction successful!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    inputRef.current?.value && (inputRef.current.value = "");
  };

  return (
    <div className="max-w-md mx-auto mt-8 space-y-4 text-center">
      <Toaster />

      <div
        className="border-2 border-dashed p-6 rounded-lg cursor-pointer hover:bg-muted transition"
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full rounded-md object-contain max-h-60 mx-auto"
          />
        ) : (
          <>
            <ImagePlus className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mt-2">
              Click to select an X-ray image
            </p>
          </>
        )}
        <Input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="flex gap-2">
        <Button
          onClick={handleUpload}
          disabled={!file || loading}
          className="flex-1"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </>
          )}
        </Button>

        {file && !loading && (
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex items-center justify-center"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        )}
      </div>

      {result && (
        <div className="mt-6 space-y-3 text-left animate-fade-in">
          <p>
            <strong>Bone Type:</strong> {result.bone_type}
          </p>
          <p>
            <strong>Fracture Status:</strong>{" "}
            <span
              className={
                result.result === "fractured"
                  ? "text-red-500 font-semibold"
                  : "text-green-600 font-semibold"
              }
            >
              {result.result}
            </span>
          </p>
          <img
            src={`http://localhost:5000${result.image_url}`}
            alt="Prediction Result"
            className="mt-3 w-full rounded-lg border shadow"
          />
        </div>
      )}
    </div>
  );
}
