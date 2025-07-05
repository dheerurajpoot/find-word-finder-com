import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Above vs Abov - Which is Correct?",
  description: "Learn the correct spelling between 'above' and 'abov'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AboveVsAbovPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Above or Abov</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Above or Abov, and how to use them properly.</p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Abov
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Abov" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Above
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Above" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>

      {/* Definitions and Examples */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Above <span className="text-xs text-muted-foreground font-normal">(preposition/adverb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> In or to a higher position than something else
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The bird flew above the trees
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Over</li>
                <li>Higher than</li>
                <li>Beyond</li>
                <li>On top of</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User-friendly note above FAQ */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Above" is the correct spelling. "Abov" is a common misspelling—remember, it ends with "-e" not just "-v".
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it abov or above?</span>
              <div className="text-sm text-muted-foreground">The correct word is "above." "Abov" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce above?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈbʌv/ (uh-BUV).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does above mean?</span>
              <div className="text-sm text-muted-foreground">In or to a higher position than something else.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 