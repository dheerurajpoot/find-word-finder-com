import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AddressVsAdressPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Adress or Address</h1>
        <p className="text-muted-foreground text-sm">Did you mean "Address"?</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-destructive/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive text-base">
              <Badge variant="destructive">INCORRECT</Badge> Adress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive text-sm">"Adress" is not a correct English word.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">CORRECT</Badge> Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Address" is the correct spelling.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Address <span className="text-xs text-muted-foreground font-normal">(noun/verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> (n) The details of where a building is located; (v) to speak to or deal with something.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> Please write your address clearly. / The president will address the nation tonight.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Location</li>
                <li>Residence</li>
                <li>Speak to</li>
                <li>Deal with</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Address" is the correct spelling for both the place where someone lives and the act of speaking to a group. "Adress" is a common misspelling—remember, it has two "d" letters.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it adress or address?</span>
              <div className="text-sm text-muted-foreground">The correct word is "address." "Adress" is a common misspelling.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce address?</span>
              <div className="text-sm text-muted-foreground">The correct pronunciation is /əˈdrɛs/ (uh-DRESS) or /ˈædˌrɛs/ (AD-dress), depending on usage.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does address mean?</span>
              <div className="text-sm text-muted-foreground">It can mean the location of a place or to speak to/deal with something.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 