import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AcquaintanceVsAcquaintencePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Acquaintence or Acquaintance</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Acquaintance"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Acquaintence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Acquaintence" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Acquaintance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Acquaintance" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Acquaintance <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> A person one knows slightly, but who is not a close friend.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> I met an old acquaintance at the conference.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Associate</li>
                <li>Contact</li>
                <li>Colleague</li>
                <li>Companion</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Acquaintance" is the correct spelling for someone you know slightly. "Acquaintence" is a common misspelling—remember, the correct ending is "-ance."
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it acquaintence or acquaintance?</span>
              <div className="text-sm text-muted-foreground">The correct word is "acquaintance." "Acquaintence" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce acquaintance?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈkweɪntəns/ (uh-KWAYN-tuns).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does acquaintance mean?</span>
              <div className="text-sm text-muted-foreground">A person one knows slightly, but who is not a close friend.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 