import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Absent vs Absense - Which is Correct?",
  description: "Learn the correct spelling between 'absent' and 'absense'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbsentVsAbsensePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Absent or Absense</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Absent or Absense, and how to use them properly.</p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Absense
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Absense" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Absent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Absent" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>

      {/* Definitions and Examples */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Absent <span className="text-xs text-muted-foreground font-normal">(adjective)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Not present in a place, at an occasion, or as part of something
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> Several students were absent from class today
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Missing</li>
                <li>Away</li>
                <li>Not present</li>
                <li>Gone</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User-friendly note above FAQ */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Absent" is the correct spelling. "Absense" is a common misspelling—remember, it ends with "-ent" not "-ense".
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it absense or absent?</span>
              <div className="text-sm text-muted-foreground">The correct word is "absent." "Absense" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce absent?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈæbsənt/ (AB-suhnt).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does absent mean?</span>
              <div className="text-sm text-muted-foreground">Not present in a place, at an occasion, or as part of something.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 