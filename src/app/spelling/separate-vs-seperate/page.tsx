import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SeparateVsSeperatePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Seperate or Separate</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Separate"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Seperate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Seperate" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Separate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Separate" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Separate <span className="text-xs text-muted-foreground font-normal">(verb, adjective)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> To set or keep apart; not joined or together.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> Please keep the documents in separate folders.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Divide</li>
                <li>Detach</li>
                <li>Isolate</li>
                <li>Split</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Separate" is the correct spelling for keeping things apart. "Seperate" is a common misspelling—remember, it has an "a" after the "p." 
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it seperate or separate?</span>
              <div className="text-sm text-muted-foreground">The correct word is "separate." "Seperate" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce separate?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈsɛp.əˌreɪt/ (SEP-uh-rayt).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does separate mean?</span>
              <div className="text-sm text-muted-foreground">To set or keep apart; not joined or together.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 