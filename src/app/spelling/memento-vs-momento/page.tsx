import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MementoVsMomentoPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Momento or Memento</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Memento"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Momento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Momento" is not a correct English word (though it is a word in Spanish and Italian for "moment").</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Memento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Memento" is the correct spelling for a keepsake or souvenir.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Memento <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> An object kept as a reminder or souvenir of a person or event.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She kept the ticket stub as a memento of the concert.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Souvenir</li>
                <li>Keepsake</li>
                <li>Token</li>
                <li>Remembrance</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Memento" is the correct spelling for a keepsake or reminder. "Momento" is a common misspelling in English—remember, it has an "e" after the "m." ("Momento" is a real word in Spanish and Italian for "moment.")
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it momento or memento?</span>
              <div className="text-sm text-muted-foreground">The correct word in English is "memento." "Momento" is a common misspelling, but is a real word in Spanish and Italian.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce memento?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /məˈmɛntoʊ/ (muh-MEN-toh).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does memento mean?</span>
              <div className="text-sm text-muted-foreground">An object kept as a reminder or souvenir of a person or event.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 