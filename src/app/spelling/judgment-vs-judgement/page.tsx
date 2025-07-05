import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function JudgmentVsJudgementPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Judgment or Judgement</h1>
        <p className="text-muted-foreground text-sm">US vs UK spelling: both are correct, but used in different regions and contexts.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Card className="flex-1 border-green-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600 text-base">
              <Badge className="bg-green-600 text-white">US</Badge> Judgment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 text-sm">"Judgment" is the standard spelling in American English and in legal contexts worldwide.</p>
          </CardContent>
        </Card>
        <Card className="flex-1 border-blue-400/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600 text-base">
              <Badge className="bg-blue-600 text-white">UK</Badge> Judgement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 text-sm">"Judgement" is the standard spelling in British English (except in legal contexts, where "judgment" is used).</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Judgment/Judgement <span className="text-xs text-muted-foreground font-normal">(noun)</span></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-2">
              <span className="font-semibold">Definition:</span> The ability to make considered decisions or come to sensible conclusions; a decision of a court or judge.
            </div>
            <div className="mb-2">
              <span className="font-semibold">Example:</span> She showed good judgment in the situation. / The court issued its judgment.
            </div>
            <div>
              <span className="font-semibold">Synonyms:</span>
              <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                <li>Discernment</li>
                <li>Decision</li>
                <li>Ruling</li>
                <li>Verdict</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-sm">
        <strong>Note:</strong> "Judgment" is preferred in American English and in legal contexts. "Judgement" is more common in British English, except in law. Both are understood in both regions.
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">FAQ's</h2>
        <div className="space-y-3">
          <Card>
            <CardContent>
              <span className="font-semibold">Is it judgment or judgement?</span>
              <div className="text-sm text-muted-foreground">Both are correct: "judgment" (US, legal), "judgement" (UK, general). "Judgment" is always used in legal contexts.</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">How to pronounce judgment/judgement?</span>
              <div className="text-sm text-muted-foreground">Both are pronounced /ˈdʒʌdʒmənt/ (JUJ-ment).</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <span className="font-semibold">What does judgment/judgement mean?</span>
              <div className="text-sm text-muted-foreground">The ability to make considered decisions; a decision of a court or judge.</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 