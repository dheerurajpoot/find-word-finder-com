import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AbundanceVsAbundencePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Abundance or Abundence</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Abundance or Abundence, and how to use them properly.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Abundence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Abundence" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Abundance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Abundance" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Abundance <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> A very large quantity of something
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> There was an abundance of food at the party
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Plenty</li>
                <li>Profusion</li>
                <li>Wealth</li>
                <li>Excess</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Abundance" is the correct spelling. "Abundence" is a common misspelling—remember, it ends with "-ance" not "-ence".
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it abundence or abundance?</span>
              <div className="text-sm text-muted-foreground">The correct word is "abundance." "Abundence" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce abundance?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈbʌndəns/ (uh-BUN-duhns).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does abundance mean?</span>
              <div className="text-sm text-muted-foreground">A very large quantity of something.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 