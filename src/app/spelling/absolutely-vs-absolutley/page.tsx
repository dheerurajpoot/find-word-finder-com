import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AbsolutelyVsAbsolutleyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Absolutely or Absolutley</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Absolutely or Absolutley, and how to use them properly.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Absolutley
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Absolutley" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Absolutely
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Absolutely" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Absolutely <span className="text-xs text-muted-foreground font-normal">(adverb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Completely, totally, or without any doubt
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> I absolutely love this movie
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Completely</li>
                <li>Totally</li>
                <li>Definitely</li>
                <li>Certainly</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Absolutely" is the correct spelling. "Absolutley" is a common misspelling—remember, it ends with "-ely" not "-ley".
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it absolutley or absolutely?</span>
              <div className="text-sm text-muted-foreground">The correct word is "absolutely." "Absolutley" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce absolutely?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˌæbsəˈluːtli/ (ab-suh-LOOT-lee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does absolutely mean?</span>
              <div className="text-sm text-muted-foreground">Completely, totally, or without any doubt.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 