import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccordingVsAccordngPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Accordng or According</h1>
        <p className="text-muted-foreground text-sm">Did you mean "According"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Accordng
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Accordng" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> According
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"According" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>According <span className="text-xs text-muted-foreground font-normal">(preposition)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> As stated by or in.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> According to the report, sales increased last year.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>As stated by</li>
                <li>As reported by</li>
                <li>In the opinion of</li>
                <li>Based on</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "According" is a preposition meaning as stated by or in. "Accordng" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it accordng or according?</span>
              <div className="text-sm text-muted-foreground">The correct word is "according." "Accordng" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce according?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈkɔːrdɪŋ/ (uh-KOR-ding).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does according mean?</span>
              <div className="text-sm text-muted-foreground">As stated by or in.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 