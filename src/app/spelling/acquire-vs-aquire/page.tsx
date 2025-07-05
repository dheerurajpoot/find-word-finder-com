import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AcquireVsAquirePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Aquire or Acquire</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Acquire"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Aquire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Aquire" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Acquire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Acquire" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Acquire <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> To buy or obtain something for oneself.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She managed to acquire a rare book.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Obtain</li>
                <li>Get</li>
                <li>Procure</li>
                <li>Secure</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Acquire" is the correct spelling for obtaining or getting something. "Aquire" is a common misspelling—remember, it has a "c" after the "a." 
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it aquire or acquire?</span>
              <div className="text-sm text-muted-foreground">The correct word is "acquire." "Aquire" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce acquire?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈkwaɪər/ (uh-KWY-er).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does acquire mean?</span>
              <div className="text-sm text-muted-foreground">To buy or obtain something for oneself.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 