import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ManeuverVsManoeuvrePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Maneuver or Manoeuvre</h1>
        <p className="text-muted-foreground text-sm">US vs UK spelling: both are correct, but used in different regions and contexts.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">US</Badge> Maneuver
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Maneuver" is the standard spelling in American English.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-blue-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 text-base">
              <Badge className="bg-blue-600 text-white">UK</Badge> Manoeuvre
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 text-sm">"Manoeuvre" is the standard spelling in British English.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Maneuver/Manoeuvre <span className="text-xs text-muted-foreground font-normal">(noun/verb)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> (n) A movement or series of moves requiring skill and care; (v) to move skillfully or carefully.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> The pilot performed a difficult maneuver. / The pilot performed a difficult manoeuvre.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Move</li>
                <li>Tactic</li>
                <li>Operation</li>
                <li>Strategy</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Maneuver" is preferred in American English, while "manoeuvre" is used in British English. Both are correct depending on the region.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it maneuver or manoeuvre?</span>
              <div className="text-sm text-muted-foreground">Both are correct: "maneuver" (US), "manoeuvre" (UK).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce maneuver/manoeuvre?</span>
              <div className="text-sm text-muted-foreground">Both are pronounced /məˈnuːvər/ (muh-NOO-vur).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does maneuver/manoeuvre mean?</span>
              <div className="text-sm text-muted-foreground">A movement or series of moves requiring skill and care; to move skillfully or carefully.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 