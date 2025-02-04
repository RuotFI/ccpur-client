import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { CloudUpload } from "lucide-react";

export default function DeclarationForm() {
  // Passport States
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [croppedPassport, setCroppedPassport] = useState(null);
  const [passportCrop, setPassportCrop] = useState({ x: 0, y: 0 });
  const [passportZoom, setPassportZoom] = useState(1);
  const [passportCroppedArea, setPassportCroppedArea] = useState(null);

  // Signature States
  const [signature, setSignature] = useState(null);
  const [croppedSignature, setCroppedSignature] = useState(null);
  const [signatureCrop, setSignatureCrop] = useState({ x: 0, y: 0 });
  const [signatureZoom, setSignatureZoom] = useState(1);
  const [signatureCroppedArea, setSignatureCroppedArea] = useState(null);

  // Handles file selection
  const handleFileChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Handles cropping completion
  const onCropComplete = useCallback((setCroppedArea) => (_, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  return (
    <div className="w-full items-center gap-6">
      {/* Passport Photo Upload */}
      <div className="flex flex-col pt-12 items-start gap-8">
        <label className="w-40 h-52 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200 transition-all duration-300 relative overflow-hidden shadow-md">
          {croppedPassport ? (
            <img src={croppedPassport} alt="Cropped Passport" className="w-full h-full object-cover rounded-lg" />
          ) : passportPhoto ? (
            <img src={passportPhoto} alt="Uploaded Passport" className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="flex flex-col items-center">
              <CloudUpload className="w-8 h-8 text-gray-500" />
              <span className="text-gray-600 text-sm mt-2">Upload Passport</span>
            </div>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setPassportPhoto)} />
        </label>

        {/* Passport Cropper */}
        {passportPhoto && !croppedPassport && (
          <div className="w-60 h-80 bg-gray-100 border rounded-lg overflow-hidden relative">
            <Cropper
              image={passportPhoto}
              crop={passportCrop}
              zoom={passportZoom}
              aspect={3 / 4} // Passport aspect ratio
              onCropChange={setPassportCrop}
              onZoomChange={setPassportZoom}
              onCropComplete={onCropComplete(setPassportCroppedArea)}
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
              onClick={() => setCroppedPassport(passportPhoto)}
            >
              Save Crop
            </button>
            
          </div>
        )}
        

<div className="flex flex-col items-center">
        <label className="w-40 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200">
          {croppedSignature ? (
            <img src={croppedSignature} alt="Signature" className="w-full h-full object-contain rounded-lg" />
          ) : signature ? (
            <img src={signature} alt="Uploaded Signature" className="w-full h-full object-contain rounded-lg" />
          ) : (
            <div className="flex flex-col items-center">
              <CloudUpload className="w-6 h-6 text-gray-500" />
              <span className="text-gray-500 text-sm mt-1">Upload Signature</span>
            </div>
          )}
          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setSignature)} />
        </label>
      </div>

      {/* Signature Cropper */}
      {signature && !croppedSignature && (
        <div className="w-60 h-24 bg-gray-100 border rounded-lg overflow-hidden relative">
          <Cropper
            image={signature}
            crop={signatureCrop}
            zoom={signatureZoom}
            aspect={5 / 1} // Signature aspect ratio
            onCropChange={setSignatureCrop}
            onZoomChange={setSignatureZoom}
            onCropComplete={onCropComplete(setSignatureCroppedArea)}
          />
          <button
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
            onClick={() => setCroppedSignature(signature)}
          >
            Save Crop
          </button>
        </div>
      )}
      </div>

      {/* Signature Upload */}
      
    </div>
  );
}
