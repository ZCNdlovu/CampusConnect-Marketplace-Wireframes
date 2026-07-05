import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Card } from "./ui/card";

export function ZoomControls() {
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    // Load saved zoom level from localStorage
    const savedZoom = localStorage.getItem("appZoom");
    if (savedZoom) {
      const zoomLevel = parseInt(savedZoom, 10);
      setZoom(zoomLevel);
      applyZoom(zoomLevel);
    }
  }, []);

  const applyZoom = (level) => {
    document.documentElement.style.fontSize = `${(level / 100) * 16}px`;
  };

  const handleZoomIn = () => {
    const newZoom = Math.min(zoom + 10, 150);
    setZoom(newZoom);
    applyZoom(newZoom);
    localStorage.setItem("appZoom", newZoom.toString());
  };

  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 10, 50);
    setZoom(newZoom);
    applyZoom(newZoom);
    localStorage.setItem("appZoom", newZoom.toString());
  };

  const handleReset = () => {
    setZoom(100);
    applyZoom(100);
    localStorage.setItem("appZoom", "100");
  };

  return (
    <Card className="fixed bottom-6 right-6 z-50 bg-background/95 backdrop-blur-sm border-primary/20 shadow-lg">
      <div className="flex items-center gap-2 p-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleZoomOut}
          disabled={zoom <= 50}
          className="h-8 w-8"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleReset}
          className="h-8 px-3 min-w-[60px]"
          title="Reset Zoom"
        >
          <Maximize2 className="h-3 w-3 mr-1" />
          {zoom}%
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={handleZoomIn}
          disabled={zoom >= 150}
          className="h-8 w-8"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}