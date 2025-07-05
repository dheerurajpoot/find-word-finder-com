import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccidentallyVsAccidentalyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Accidentaly or Accidentally</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Accidentally"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Accidentaly
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Accidentaly" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Accidentally
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Accidentally" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Accidentally <span className="text-xs text-muted-foreground font-normal">(adverb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Happening by chance or mistake; unintentionally.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She accidentally deleted the file.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Unintentionally</li>
                <li>Inadvertently</li>
                <li>By mistake</li>
                <li>By accident</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Accidentally" is the correct spelling for something done by accident. "Accidentaly" is a common misspelling—remember, it has two "l"s before the "y."
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it accidentaly or accidentally?</span>
              <div className="text-sm text-muted-foreground">The correct word is "accidentally." "Accidentaly" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce accidentally?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˌæksɪˈdɛntəli/ (ak-si-DEN-tuh-lee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does accidentally mean?</span>
              <div className="text-sm text-muted-foreground">Happening by chance or mistake; unintentionally.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 