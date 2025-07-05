import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PlaywrightVsPlaywritePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Playwrite or Playwright</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Playwright"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Playwrite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Playwrite" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Playwright
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Playwright" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Playwright <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> A person who writes plays.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> Shakespeare is perhaps the most famous playwright in history.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Dramatist</li>
                <li>Scriptwriter</li>
                <li>Author</li>
                <li>Writer</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Playwright" is the correct spelling for someone who writes plays. "Playwrite" is a common misspelling—remember, it ends with "-wright," not "-write." 
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it playwrite or playwright?</span>
              <div className="text-sm text-muted-foreground">The correct word is "playwright." "Playwrite" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce playwright?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈpleɪˌraɪt/ (PLAY-ryte).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does playwright mean?</span>
              <div className="text-sm text-muted-foreground">A person who writes plays.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 