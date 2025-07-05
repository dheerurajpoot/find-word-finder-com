import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccessVsAccesPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Acces or Access</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Access"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Acces
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Acces" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Access" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Access <span className="text-xs text-muted-foreground font-normal">(noun/verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> The means or opportunity to approach or enter a place; to obtain or retrieve.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> Only authorized personnel have access to the data.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Entry</li>
                <li>Admission</li>
                <li>Entrance</li>
                <li>Approach</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Access" is the correct spelling for entry or the ability to approach. "Acces" is a common misspelling—remember, it has two "s" letters.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it acces or access?</span>
              <div className="text-sm text-muted-foreground">The correct word is "access." "Acces" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce access?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ˈæksɛs/ (AK-sess).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does access mean?</span>
              <div className="text-sm text-muted-foreground">The means or opportunity to approach or enter a place; to obtain or retrieve.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 