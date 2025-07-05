import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ActuallyVsActualyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Actualy or Actually</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Actually"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Actualy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Actualy" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Actually
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Actually" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Actually <span className="text-xs text-muted-foreground font-normal">(adverb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> As the truth or facts of a situation; really.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> He actually expected me to pay for his meal.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Really</li>
                <li>In fact</li>
                <li>Truly</li>
                <li>Indeed</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Actually" is an adverb meaning as the truth or facts of a situation. "Actualy" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it actualy or actually?</span>
              <div className="text-sm text-muted-foreground">The correct word is "actually." "Actualy" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce actually?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈæktʃuəli/ (AK-choo-uh-lee).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does actually mean?</span>
              <div className="text-sm text-muted-foreground">As the truth or facts of a situation; really.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 