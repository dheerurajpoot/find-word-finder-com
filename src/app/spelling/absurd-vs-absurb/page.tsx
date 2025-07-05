import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AbsurdVsAbsurbPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Absurd or Absurb</h1>
        <p className="text-muted-foreground text-sm">Which spelling is correct, Absurd or Absurb, and how to use them properly.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Absurb
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Absurb" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge variant="default">CORRECT</Badge> Absurd
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Absurd" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Absurd <span className="text-xs text-muted-foreground font-normal">(adjective)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Wildly unreasonable, illogical, or inappropriate
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The idea was completely absurd
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Ridiculous</li>
                <li>Preposterous</li>
                <li>Nonsensical</li>
                <li>Ludicrous</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Absurd" is the correct spelling. "Absurb" is a common misspelling—remember, it ends with "-urd" not "-urb".
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it absurb or absurd?</span>
              <div className="text-sm text-muted-foreground">The correct word is "absurd." "Absurb" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce absurd?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əbˈsɜːrd/ (ub-SURD).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does absurd mean?</span>
              <div className="text-sm text-muted-foreground">Wildly unreasonable, illogical, or inappropriate.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 