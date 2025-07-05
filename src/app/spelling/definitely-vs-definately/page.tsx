import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DefinitelyVsDefinatelyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Definately or Definitely</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Definitely"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Definately
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Definately" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Definitely
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Definitely" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Definitely <span className="text-xs text-muted-foreground font-normal">(adverb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Without doubt; certainly.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> I will definitely be at the meeting.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Certainly</li>
                <li>Absolutely</li>
                <li>Undoubtedly</li>
                <li>Surely</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Definitely" is the correct spelling for expressing certainty. "Definately" is a very common misspelling—remember, it has "-ite-" in the middle.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it definately or definitely?</span>
              <div className="text-sm text-muted-foreground">The correct word is "definitely." "Definately" is a very common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce definitely?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈdɛfɪnətli/ (DEF-in-it-lee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does definitely mean?</span>
              <div className="text-sm text-muted-foreground">Without doubt; certainly.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 