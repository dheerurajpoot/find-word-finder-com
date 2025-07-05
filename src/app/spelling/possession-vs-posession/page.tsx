import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PossessionVsPosessionPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Posession or Possession</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Possession"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Posession
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Posession" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Possession
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Possession" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Possession <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> The state of having, owning, or controlling something.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The keys are in your possession.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Ownership</li>
                <li>Control</li>
                <li>Holding</li>
                <li>Custody</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Possession" is the correct spelling for having or owning something. "Posession" is a common misspelling—remember, it has two "s" letters in the middle.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it posession or possession?</span>
              <div className="text-sm text-muted-foreground">The correct word is "possession." "Posession" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce possession?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /pəˈzɛʃən/ (puh-ZESH-un).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does possession mean?</span>
              <div className="text-sm text-muted-foreground">The state of having, owning, or controlling something.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 