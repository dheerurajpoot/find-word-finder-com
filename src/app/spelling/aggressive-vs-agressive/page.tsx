import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AggressiveVsAgressivePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Agressive or Aggressive</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Aggressive"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Agressive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Agressive" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Aggressive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Aggressive" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Aggressive <span className="text-xs text-muted-foreground font-normal">(adjective)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Ready or likely to attack or confront; characterized by or resulting from aggression.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> He became aggressive when challenged.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Hostile</li>
                <li>Belligerent</li>
                <li>Assertive</li>
                <li>Forceful</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Aggressive" is an adjective meaning ready to attack or confront. "Agressive" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it agressive or aggressive?</span>
              <div className="text-sm text-muted-foreground">The correct word is "aggressive." "Agressive" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce aggressive?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈɡrɛsɪv/ (uh-GRES-iv).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does aggressive mean?</span>
              <div className="text-sm text-muted-foreground">Ready or likely to attack or confront; characterized by or resulting from aggression.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 