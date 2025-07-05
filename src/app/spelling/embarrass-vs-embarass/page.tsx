import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EmbarrassVsEmbarassPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Embarass or Embarrass</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Embarrass"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Embarass
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Embarass" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Embarrass
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Embarrass" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Embarrass <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> To cause someone to feel awkward, self-conscious, or ashamed.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> His joke embarrassed everyone in the room.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Humiliate</li>
                <li>Mortify</li>
                <li>Abash</li>
                <li>Shame</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Embarrass" is the correct spelling for causing someone to feel awkward or ashamed. "Embarass" is a common misspelling—remember, it has two "r" and two "s" letters.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it embarass or embarrass?</span>
              <div className="text-sm text-muted-foreground">The correct word is "embarrass." "Embarass" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce embarrass?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ɪmˈbærəs/ (im-BAIR-uss).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does embarrass mean?</span>
              <div className="text-sm text-muted-foreground">To cause someone to feel awkward, self-conscious, or ashamed.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 