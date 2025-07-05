import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AlreadyVsAllreadyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Allready or Already</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Already"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Allready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Allready" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Already
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Already" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Already <span className="text-xs text-muted-foreground font-normal">(adverb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Before or by now or the time in question.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She had already left when I arrived.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Previously</li>
                <li>Earlier</li>
                <li>By now</li>
                <li>Beforehand</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Already" is an adverb meaning before or by now. "Allready" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it allready or already?</span>
              <div className="text-sm text-muted-foreground">The correct word is "already." "Allready" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce already?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ɔːlˈrɛdi/ (awl-RED-ee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does already mean?</span>
              <div className="text-sm text-muted-foreground">Before or by now or the time in question.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 