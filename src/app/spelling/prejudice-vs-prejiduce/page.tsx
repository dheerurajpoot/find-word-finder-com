import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrejudiceVsPrejiducePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Prejiduce or Prejudice</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Prejudice"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Prejiduce
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Prejiduce" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Prejudice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Prejudice" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Prejudice <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Preconceived opinion that is not based on reason or actual experience.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> Prejudice can lead to unfair treatment of others.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Bias</li>
                <li>Preconception</li>
                <li>Partiality</li>
                <li>Discrimination</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Prejudice" is the correct spelling for a preconceived opinion not based on reason. "Prejiduce" is a common misspelling—remember, it ends with "-dice," not "-duce."
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it prejiduce or prejudice?</span>
              <div className="text-sm text-muted-foreground">The correct word is "prejudice." "Prejiduce" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce prejudice?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈprɛdʒ.ə.dɪs/ (PREJ-uh-dis).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does prejudice mean?</span>
              <div className="text-sm text-muted-foreground">A preconceived opinion that is not based on reason or actual experience.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 