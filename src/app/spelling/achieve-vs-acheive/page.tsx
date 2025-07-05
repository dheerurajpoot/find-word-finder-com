import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AchieveVsAcheivePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Acheive or Achieve</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Achieve"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Acheive
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Acheive" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Achieve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Achieve" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Achieve <span className="text-xs text-muted-foreground font-normal">(verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> Successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She achieved her dream of becoming a doctor.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Accomplish</li>
                <li>Attain</li>
                <li>Reach</li>
                <li>Realize</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Achieve" is a verb meaning to successfully bring about or reach something. "Acheive" is a common misspelling.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it acheive or achieve?</span>
              <div className="text-sm text-muted-foreground">The correct word is "achieve." "Acheive" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce achieve?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈtʃiːv/ (uh-CHEEV).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does achieve mean?</span>
              <div className="text-sm text-muted-foreground">Successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 