import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Abraded vs Abraided - Which is Correct?",
  description: "Learn the correct spelling between 'abraded' and 'abraided'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbradedVsAbraidedPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Abraded or Abraided</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Abraded or Abraided, and how to use them properly.</p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Abraided
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Abraided" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Abraded
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Abraded" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>

      {/* Definitions and Examples */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Abraded <span className="text-xs text-muted-foreground font-normal">(verb, past tense)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Scraped or worn away by friction
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The surface was abraded by the sandpaper
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Scraped</li>
                <li>Worn</li>
                <li>Rubbed</li>
                <li>Eroded</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User-friendly note above FAQ */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Abraded" is the correct spelling. "Abraided" is a common misspelling—remember, it has only one "i" in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it abraided or abraded?</span>
              <div className="text-sm text-muted-foreground">The correct word is "abraded." "Abraided" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce abraded?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈbreɪdɪd/ (uh-BRAY-did).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does abraded mean?</span>
              <div className="text-sm text-muted-foreground">Scraped or worn away by friction.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 