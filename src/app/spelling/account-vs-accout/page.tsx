import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AccountVsAccoutPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Accout or Account</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Account"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Accout
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Accout" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Account" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Account <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> An arrangement with a bank or company to keep money or use services.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She opened a new savings account.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Record</li>
                <li>Statement</li>
                <li>Ledger</li>
                <li>Profile</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Account" is the correct spelling for a financial or service arrangement. "Accout" is a common misspelling—remember, it has two "c"s and ends with "-ount."
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it accout or account?</span>
              <div className="text-sm text-muted-foreground">The correct word is "account." "Accout" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce account?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈkaʊnt/ (uh-KOWNT).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does account mean?</span>
              <div className="text-sm text-muted-foreground">An arrangement with a bank or company to keep money or use services.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 