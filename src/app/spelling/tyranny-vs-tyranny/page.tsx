import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TyrannyVsTyrannyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Tyranny or Tyranny</h1>
        <p className="text-muted-foreground text-sm">Both spellings are the same, but sometimes people mistakenly use a different form.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Tyranny
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Tyranny" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Tyranny <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Cruel and oppressive government or rule.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The people rebelled against the king's tyranny.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Despotism</li>
                <li>Dictatorship</li>
                <li>Oppression</li>
                <li>Autocracy</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Tyranny" is the correct spelling for cruel and oppressive rule. Double-check for extra or missing letters.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it tyranny or tyranny?</span>
              <div className="text-sm text-muted-foreground">"Tyranny" is the correct spelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce tyranny?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈtɪr.ə.ni/ (TIR-uh-nee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does tyranny mean?</span>
              <div className="text-sm text-muted-foreground">Cruel and oppressive government or rule.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 