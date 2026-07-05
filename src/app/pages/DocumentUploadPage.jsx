import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Upload, FileText, CheckCircle, XCircle, Clock } from "lucide-react";

const uploadedDocuments = [
  { id: 1, name: "Student_ID_Card.pdf", type: "ID Verification", size: "2.4 MB", status: "approved", uploadDate: "2026-05-05" },
  { id: 2, name: "Proof_of_Residence.pdf", type: "Address Verification", size: "1.8 MB", status: "pending", uploadDate: "2026-05-08" },
  { id: 3, name: "Bank_Statement.pdf", type: "Payment Verification", size: "890 KB", status: "rejected", uploadDate: "2026-05-01" },
];

export function DocumentUploadPage() {
  const [documents, setDocuments] = useState(uploadedDocuments);

  return (
    <div className="min-h-screen bg-background/50 backdrop-blur-sm" style={{
      backgroundImage: 'url(/src/imports/Campus.Connect.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <ZoomControls />
      <div className="container mx-auto px-4 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              Document Management
            </h1>
            <p className="text-muted-foreground mt-2">
              Upload and manage your verification documents
            </p>
          </div>

          {/* Upload Section */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mb-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Upload New Document</CardTitle>
              <CardDescription>
                Upload documents to verify your identity and enable full marketplace features
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id="document-upload"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                />
                <label htmlFor="document-upload" className="cursor-pointer">
                  <Upload className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="mb-2">Drop files here or click to upload</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Accepted formats: PDF, JPG, PNG (max 10MB per file)
                  </p>
                  <Button>Select Files</Button>
                </label>
              </div>

              <div className="mt-6 bg-primary/10 border border-primary/30 p-4 rounded-lg">
                <h4 className="text-primary mb-2">Required Documents</h4>
                <ul className="text-sm space-y-1">
                  <li>• Student ID Card or Staff ID</li>
                  <li>• Proof of residence (utility bill or bank statement)</li>
                  <li>• University email verification (automatic)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Uploaded Documents */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>My Documents</CardTitle>
              <CardDescription>View and manage your uploaded documents</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-4 border border-primary/20 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-1">{doc.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Uploaded: {doc.uploadDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {doc.status === "approved" && (
                        <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Approved
                        </Badge>
                      )}
                      {doc.status === "pending" && (
                        <Badge variant="secondary">
                          <Clock className="h-3 w-3 mr-1" />
                          Pending
                        </Badge>
                      )}
                      {doc.status === "rejected" && (
                        <Badge variant="destructive">
                          <XCircle className="h-3 w-3 mr-1" />
                          Rejected
                        </Badge>
                      )}
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>

              {documents.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No documents uploaded yet</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload your verification documents to get started
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 mt-6">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Verification Status</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-900">Email Verified</span>
                  </div>
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span className="text-yellow-900">Identity Verification</span>
                  </div>
                  <Badge variant="secondary">Pending</Badge>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-900">Payment Verification</span>
                  </div>
                  <Badge variant="outline">Not Started</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
