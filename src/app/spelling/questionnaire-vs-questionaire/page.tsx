import { Metadata } from "next";
import { Card } from "@/components/ui/card";


export const metadata: Metadata = {
  title: "Questionnaire or Questionaire - Which is Correct?",
  description: "Learn the correct spelling between &apos;questionnaire&apos; and &apos;questionaire&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function QuestionnaireVsQuestionairePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Questionnaire or Questionaire</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Questionnaire or Questionaire, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Questionaire</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Questionaire&quot; is not a valid word in English.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Questionnaire</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Questionnaire&quot; is a noun meaning a set of questions for surveys.
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
              <span className="font-bold">Questionnaire</span> (noun): A set of printed or written questions with a choice of answers, devised for the purposes of a survey or statistical study.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Please fill out the questionnaire before the interview.</li>
              <li>The research team distributed questionnaires to participants.</li>
              <li>We designed a questionnaire to gather customer feedback.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;questionnaire&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Survey</li>
                  <li>Form</li>
                  <li>Poll</li>
                  <li>Question sheet</li>
                  <li>Assessment</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Evaluation</li>
                  <li>Inquiry</li>
                  <li>Examination</li>
                  <li>Research tool</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Questionnaire&quot; is the correct spelling. &quot;Questionaire&quot; is a common misspelling—remember, it has double &quot;n&quot; in the middle.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it questionaire or questionnaire?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;questionnaire.&quot; &quot;Questionaire&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce questionnaire?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˌkwes.tʃəˈner/ (kwes-chuh-NAIR).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does questionnaire mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A set of printed or written questions with a choice of answers, devised for the purposes of a survey or statistical study.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 