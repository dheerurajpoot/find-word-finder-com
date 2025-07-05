import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrincipalVsPrinciplePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Principal or Principle</h1>
        <p className="text-muted-foreground text-sm">These two words are often confused due to their similar spelling and pronunciation.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Principal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Principal" refers to a person with the highest authority or something of primary importance.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-blue-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 text-base">
              <Badge className="bg-blue-600 text-white">CORRECT</Badge> Principle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 text-sm">"Principle" refers to a fundamental truth, law, or standard.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Principal <span className="text-xs text-muted-foreground font-normal">(noun, adjective)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> The person with the highest authority or most important position; or something of primary importance.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The school principal gave a speech. / The principal reason for the change was safety.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Head</li>
                <li>Chief</li>
                <li>Main</li>
                <li>Primary</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Principle <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> A fundamental truth, law, or standard that guides behavior or reasoning.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She acted on the principle of honesty.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Rule</li>
                <li>Standard</li>
                <li>Doctrine</li>
                <li>Value</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Principal" is usually a person or something of main importance (think: "the principal is your pal"). "Principle" is a rule or belief. They sound similar but have different meanings and uses.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">What is the difference between principal and principle?</span>
              <div className="text-sm text-muted-foreground">"Principal" refers to a person in authority or something of main importance. "Principle" refers to a fundamental rule or belief.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce principal and principle?</span>
              <div className="text-sm text-muted-foreground">Both are pronounced /ˈprɪn.sə.pəl/ (PRIN-suh-puhl), but their meanings differ.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">When should I use principal vs. principle?</span>
              <div className="text-sm text-muted-foreground">Use "principal" for a person or something of main importance; use "principle" for a rule, law, or belief.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 