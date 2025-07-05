import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Aborigine vs Aborigin - Which is Correct?",
  description: "Learn the correct spelling between 'aborigine' and 'aborigin'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AborigineVsAboriginPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Aborigine or Aborigin</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Aborigine or Aborigin, and how to use them properly.</p>
      </div>

      {/* Correct/Incorrect Cards */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Aborigin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Aborigin" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Aborigine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Aborigine" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>

      {/* Definitions and Examples */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Aborigine <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> A person, animal, or plant that has been in a country or region from earliest times
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The aborigines of Australia have a rich cultural heritage
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Indigenous</li>
                <li>Native</li>
                <li>Original inhabitant</li>
                <li>First people</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User-friendly note above FAQ */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Aborigine" is the correct spelling. "Aborigin" is a common misspelling—remember, it ends with "-ine" not "-in".
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it aborigin or aborigine?</span>
              <div className="text-sm text-muted-foreground">The correct word is "aborigine." "Aborigin" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce aborigine?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˌæbəˈrɪdʒəni/ (ab-uh-RIJ-uh-nee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does aborigine mean?</span>
              <div className="text-sm text-muted-foreground">A person, animal, or plant that has been in a country or region from earliest times.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 