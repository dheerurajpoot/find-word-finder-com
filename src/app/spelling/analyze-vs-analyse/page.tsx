import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Analyze vs Analyse - Which is Correct?",
  description: "Learn the correct spelling between 'analyze' and 'analyse'. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AnalyzeVsAnalysePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Analyze or Analyse</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          US vs UK spelling: both are correct, but used in different regions.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🇺🇸</span>
                <span className="text-2xl font-extrabold text-green-800">US SPELLING</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Analyze</div>
              <div className="text-lg md:text-xl text-gray-700">
                "Analyze" is the standard spelling in American English.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-blue-50 border border-blue-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🇬🇧</span>
                <span className="text-2xl font-extrabold text-blue-800">UK SPELLING</span>
              </div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">Analyse</div>
              <div className="text-lg md:text-xl text-gray-700">
                "Analyse" is the standard spelling in British English.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Analyze/Analyse</span> (verb): To examine something in detail for purposes of explanation and interpretation; to study systematically.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Scientists analyze the results of their experiments. (US)</li>
              <li>Scientists analyse the results of their experiments. (UK)</li>
              <li>We need to analyze the data before making a decision.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to "analyze/analyse":</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Examine</li>
                  <li>Study</li>
                  <li>Evaluate</li>
                  <li>Assess</li>
                  <li>Investigate</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Review</li>
                  <li>Scrutinize</li>
                  <li>Inspect</li>
                  <li>Consider</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> "Analyze" is preferred in American English, while "Analyse" is used in British English. Both are correct depending on the region.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ's</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it analyze or analyse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are correct: "analyze" (US), "analyse" (UK).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce analyze/analyse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are pronounced /ˈæn.əl.aɪz/ (AN-uh-lyze).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does analyze/analyse mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To examine something in detail for explanation and interpretation; to study systematically.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 