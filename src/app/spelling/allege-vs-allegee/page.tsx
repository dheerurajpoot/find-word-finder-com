import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AllegeVsAllegeePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Allegee or Allege</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Allege"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Allegee
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Allegee" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Allege
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Allege" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Allege <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Claim or assert that someone has done something illegal or wrong, typically without proof.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The report alleges that the company was aware of the risks.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Claim</li>
                <li>Assert</li>
                <li>Declare</li>
                <li>Maintain</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Allege" is a verb meaning to claim or assert. "Allegee" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it allegee or allege?</span>
              <div className="text-sm text-muted-foreground">The correct word is "allege." "Allegee" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce allege?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈlɛdʒ/ (uh-LEJ).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does allege mean?</span>
              <div className="text-sm text-muted-foreground">Claim or assert that someone has done something illegal or wrong, typically without proof.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 