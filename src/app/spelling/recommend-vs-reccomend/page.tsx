import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RecommendVsReccomendPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Reccomend or Recommend</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Recommend"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Reccomend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Reccomend" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Recommend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Recommend" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Recommend <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> To suggest that someone or something would be good or suitable for a particular job or purpose.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> I recommend this book to anyone interested in history.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Suggest</li>
                <li>Advise</li>
                <li>Endorse</li>
                <li>Propose</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Recommend" is the correct spelling for suggesting something. "Reccomend" is a common misspelling—remember, it only has one "c" after the "re-" prefix.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it reccomend or recommend?</span>
              <div className="text-sm text-muted-foreground">The correct word is "recommend." "Reccomend" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce recommend?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˌrek.əˈmend/ (rek-uh-MEND).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does recommend mean?</span>
              <div className="text-sm text-muted-foreground">To suggest that someone or something would be good or suitable for a particular job or purpose.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 