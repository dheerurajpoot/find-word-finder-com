import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccuracyVsAccurasyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Accurasy or Accuracy</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Accuracy"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Accurasy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Accurasy" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Accuracy" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Accuracy <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> The quality or state of being correct or precise.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The accuracy of the test results is crucial.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Precision</li>
                <li>Exactness</li>
                <li>Correctness</li>
                <li>Faithfulness</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Accuracy" is a noun meaning the quality of being correct or precise. "Accurasy" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it accurasy or accuracy?</span>
              <div className="text-sm text-muted-foreground">The correct word is "accuracy." "Accurasy" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce accuracy?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈækjərəsi/ (AK-yur-uh-see).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does accuracy mean?</span>
              <div className="text-sm text-muted-foreground">The quality or state of being correct or precise.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 