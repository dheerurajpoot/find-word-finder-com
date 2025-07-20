import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wrapped vs Wraped - Correct Spelling and Usage Guide",
  description:
    "Learn the difference between 'wrapped' and 'wraped'. See which is correct, common misspellings, definitions, synonyms, usage notes, FAQs, and a summary to help you write with confidence.",
};

export default function WrappedVsWrapedPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Wrapped or Wraped</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;wrapped&quot; or &quot;wraped&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-900">Wraped</h3>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              &quot;Wraped&quot; is a common misspelling and is not a recognized English word. The correct spelling is &quot;wrapped&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-900">Wrapped</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Wrapped&quot; is the correct spelling and means covered or enclosed in something, especially paper or soft material.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Wrapped</h2>
        <p className="text-lg md:text-xl text-green-900 mb-2">
          <strong>Wrapped</strong> (verb/adjective):
        </p>
        <ul className="list-disc ml-8 text-lg md:text-xl text-green-900 space-y-2">
          <li>Covered or enclosed in something, especially paper or soft material.</li>
          <li>To have wound or folded something around another object.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Wrapped</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-900">
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Enclosed</li>
              <li>Covered</li>
              <li>Bundled</li>
              <li>Swathed</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Shrouded</li>
              <li>Enveloped</li>
              <li>Blanketed</li>
              <li>Encased</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Wrapped&quot; is the only correct spelling in standard English.</li>
          <li>&quot;Wraped&quot; is a misspelling and should be avoided in all contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Is &quot;wraped&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-800">No, &quot;wraped&quot; is not a word in English. The correct spelling is &quot;wrapped&quot;.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">What does &quot;wrapped&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-800">It means covered or enclosed in something, especially paper or soft material.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">How do you use &quot;wrapped&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-800">Example: &quot;She wrapped the gift in colorful paper.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-900">
          Always use &quot;wrapped&quot; as the correct spelling. &quot;Wraped&quot; is a misspelling and should be avoided.
        </p>
      </div>
    </div>
  );
} 