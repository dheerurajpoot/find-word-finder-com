import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EnvironmentVsEnviromentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Enviroment or Environment</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Environment"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Enviroment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Enviroment" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Environment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Environment" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Environment <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> The surroundings or conditions in which a person, animal, or plant lives or operates.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> We must protect the environment for future generations.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Habitat</li>
                <li>Surroundings</li>
                <li>Setting</li>
                <li>Milieu</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Environment" is the correct spelling for the natural world or surroundings. "Enviroment" is a common misspelling—remember, it has an "n" after the "o."
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it enviroment or environment?</span>
              <div className="text-sm text-muted-foreground">The correct word is "environment." "Enviroment" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce environment?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /ɪnˈvaɪrənmənt/ (in-VY-ruhn-ment).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does environment mean?</span>
              <div className="text-sm text-muted-foreground">The surroundings or conditions in which a person, animal, or plant lives or operates.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 