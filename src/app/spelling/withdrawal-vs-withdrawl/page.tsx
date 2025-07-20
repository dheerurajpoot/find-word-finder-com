import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withdrawal vs Withdrawl - Correct Spelling and Usage Guide",
  description:
    "Learn the difference between 'withdrawal' and 'withdrawl'. See which is correct, common misspellings, definitions, synonyms, usage notes, FAQs, and a summary to help you write with confidence.",
};

export default function WithdrawalVsWithdrawlPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Withdrawal or Withdrawl</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;withdrawal&quot; or &quot;withdrawl&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-900">Withdrawl</h3>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              &quot;Withdrawl&quot; is a common misspelling and is not a recognized English word. The correct spelling is &quot;withdrawal&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-900">Withdrawal</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Withdrawal&quot; is the correct spelling and means the action of withdrawing something, or the process of ceasing to participate in an activity or substance.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Withdrawal</h2>
        <p className="text-lg md:text-xl text-green-900 mb-2">
          <strong>Withdrawal</strong> (noun):
        </p>
        <ul className="list-disc ml-8 text-lg md:text-xl text-green-900 space-y-2">
          <li>The action of withdrawing something.</li>
          <li>The process of ceasing to participate in an activity or substance.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Withdrawal</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-900">
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Retreat</li>
              <li>Departure</li>
              <li>Exit</li>
              <li>Retraction</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Disengagement</li>
              <li>Pullback</li>
              <li>Removal</li>
              <li>Abstinence</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Withdrawal&quot; is the only correct spelling in standard English.</li>
          <li>&quot;Withdrawl&quot; is a misspelling and should be avoided in all contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Is &quot;withdrawl&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-800">No, &quot;withdrawl&quot; is not a word in English. The correct spelling is &quot;withdrawal&quot;.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">What does &quot;withdrawal&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-800">It means the action of withdrawing something, or the process of ceasing to participate in an activity or substance.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">How do you use &quot;withdrawal&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-800">Example: &quot;The withdrawal of troops was completed by the end of the year.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-900">
          Always use &quot;withdrawal&quot; as the correct spelling. &quot;Withdrawl&quot; is a misspelling and should be avoided.
        </p>
      </div>
    </div>
  );
} 