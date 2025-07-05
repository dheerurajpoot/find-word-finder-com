import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FluorescentVsFlourescentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Flourescent or Fluorescent</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Fluorescent"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Flourescent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Flourescent" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Fluorescent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Fluorescent" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Fluorescent <span className="text-xs text-muted-foreground font-normal">(adjective)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Emitting light as a result of absorbing radiation, especially visible or ultraviolet light.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The room was lit by fluorescent lights.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Glowing</li>
                <li>Luminous</li>
                <li>Radiant</li>
                <li>Shining</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Fluorescent" is the correct spelling for something that emits light after absorbing radiation. "Flourescent" is a common misspelling—remember, the "u" comes after the "o." 
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it flourescent or fluorescent?</span>
              <div className="text-sm text-muted-foreground">The correct word is "fluorescent." "Flourescent" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce fluorescent?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /flʊˈrɛsənt/ (floo-RES-uhnt).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does fluorescent mean?</span>
              <div className="text-sm text-muted-foreground">Emitting light as a result of absorbing radiation, especially visible or ultraviolet light.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 