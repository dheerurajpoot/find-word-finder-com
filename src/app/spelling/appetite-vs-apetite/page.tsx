import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AppetiteVsApetitePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Apetite or Appetite</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Appetite"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Apetite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Apetite" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Appetite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Appetite" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Appetite <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> A natural desire to satisfy a bodily need, especially for food.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> He lost his appetite after hearing the bad news.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Hunger</li>
                <li>Desire</li>
                <li>Craving</li>
                <li>Yearning</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Appetite" is the correct spelling for a desire for food or something else. "Apetite" is a common misspelling—remember, it has two "p" letters.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it apetite or appetite?</span>
              <div className="text-sm text-muted-foreground">The correct word is "appetite." "Apetite" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce appetite?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈæpɪtaɪt/ (AP-ih-tyte).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does appetite mean?</span>
              <div className="text-sm text-muted-foreground">A natural desire to satisfy a bodily need, especially for food.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 