import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AppreciateVsApreciatePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Apreciate or Appreciate</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Appreciate"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Apreciate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Apreciate" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Appreciate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Appreciate" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Appreciate <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> To recognize the full worth of; to be grateful for.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> I appreciate your help with this project.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Value</li>
                <li>Respect</li>
                <li>Be grateful for</li>
                <li>Acknowledge</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Appreciate" is the correct spelling for recognizing worth or being grateful. "Apreciate" is a common misspelling—remember, it has two "p" letters.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it apreciate or appreciate?</span>
              <div className="text-sm text-muted-foreground">The correct word is "appreciate." "Apreciate" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce appreciate?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈpriːʃieɪt/ (uh-PREE-shee-ate).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does appreciate mean?</span>
              <div className="text-sm text-muted-foreground">To recognize the full worth of; to be grateful for.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 