import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MisspellVsMispellPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Mispell or Misspell</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Misspell"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Mispell
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Mispell" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Misspell
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Misspell" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Misspell <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> To spell a word incorrectly.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> It's easy to misspell complicated words.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Typo</li>
                <li>Spell wrong</li>
                <li>Miswrite</li>
                <li>Err</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Misspell" is the correct spelling for writing a word incorrectly. "Mispell" is a common misspelling—remember, it has two "s" letters in the middle.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it mispell or misspell?</span>
              <div className="text-sm text-muted-foreground">The correct word is "misspell." "Mispell" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce misspell?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˌmɪsˈspɛl/ (miss-PELL).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does misspell mean?</span>
              <div className="text-sm text-muted-foreground">To spell a word incorrectly.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 