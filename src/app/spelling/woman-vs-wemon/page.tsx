import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woman vs Wemon - Correct Spelling and Usage Guide",
  description:
    "Learn the difference between 'woman' and 'wemon'. See which is correct, common misspellings, definitions, synonyms, usage notes, FAQs, and a summary to help you write with confidence.",
};

export default function WomanVsWemonPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Woman or Wemon</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;woman&quot; or &quot;wemon&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-900">Wemon</h3>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              &quot;Wemon&quot; is a common misspelling and is not a recognized English word. The correct spelling is &quot;woman&quot; for a single adult female human.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-900">Woman</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Woman&quot; is the correct spelling for an adult female human (singular).
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Woman</h2>
        <p className="text-lg md:text-xl text-green-900 mb-2">
          <strong>Woman</strong> (noun):
        </p>
        <ul className="list-disc ml-8 text-lg md:text-xl text-green-900 space-y-2">
          <li>An adult female human.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Woman</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-900">
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Lady</li>
              <li>Female</li>
              <li>Gal</li>
              <li>Ma&apos;am</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Wife</li>
              <li>Matron</li>
              <li>Miss</li>
              <li>Madam</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Woman&quot; is the only correct spelling for a single adult female human.</li>
          <li>&quot;Wemon&quot; is a misspelling and should be avoided in all contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Is &quot;wemon&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-800">No, &quot;wemon&quot; is not a word in English. The correct spelling is &quot;woman&quot; for singular and &quot;women&quot; for plural.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">What does &quot;woman&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-800">It means an adult female human.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">How do you use &quot;woman&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-800">Example: &quot;She is a remarkable woman.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-900">
          Always use &quot;woman&quot; as the correct spelling for a single adult female human. &quot;Wemon&quot; is a misspelling and should be avoided.
        </p>
      </div>
    </div>
  );
} 