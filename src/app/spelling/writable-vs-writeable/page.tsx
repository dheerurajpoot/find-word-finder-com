import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writable vs Writeable - Correct Spelling and Usage Guide",
  description:
    "Learn the difference between 'writable' and 'writeable'. See which is correct, common misspellings, definitions, synonyms, usage notes, FAQs, and a summary to help you write with confidence.",
};

export default function WritableVsWriteablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Writable or Writeable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Unsure whether to use &quot;writable&quot; or &quot;writeable&quot;? This guide explains the correct spelling, meaning, and usage so you can write with confidence.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h3 className="text-2xl font-bold text-red-900">Writeable</h3>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              &quot;Writeable&quot; is a less common variant and is generally considered a misspelling. The standard and preferred spelling is &quot;writable&quot;.
            </p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h3 className="text-2xl font-bold text-green-900">Writable</h3>
            </div>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Writable&quot; is the correct spelling and means able to be written to, as in a writable file or writable surface.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Definition of Writable</h2>
        <p className="text-lg md:text-xl text-green-900 mb-2">
          <strong>Writable</strong> (adjective):
        </p>
        <ul className="list-disc ml-8 text-lg md:text-xl text-green-900 space-y-2">
          <li>Capable of being written to or on.</li>
          <li>Allowing data to be recorded or modified (especially in computing).</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Synonyms for Writable</h2>
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg md:text-xl text-blue-900">
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Recordable</li>
              <li>Editable</li>
              <li>Modifiable</li>
              <li>Inscribable</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-6 space-y-2">
              <li>Rewritable</li>
              <li>Printable</li>
              <li>Writable to disk</li>
              <li>Writable surface</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>&quot;Writable&quot; is the standard spelling in both American and British English.</li>
          <li>&quot;Writeable&quot; is sometimes seen but is not preferred in formal writing.</li>
          <li>Use &quot;writable&quot; in technical, academic, and everyday contexts.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">Is &quot;writeable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-800">While &quot;writeable&quot; is sometimes used, &quot;writable&quot; is the standard and preferred spelling.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">What does &quot;writable&quot; mean?</h3>
            <p className="text-lg md:text-xl text-gray-800">It means able to be written to or on, such as a writable file or writable surface.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5 border border-gray-200">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">How do you use &quot;writable&quot; in a sentence?</h3>
            <p className="text-lg md:text-xl text-gray-800">Example: &quot;Make sure the disk is writable before saving your work.&quot;</p>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-900">
          Always use &quot;writable&quot; as the correct spelling. &quot;Writeable&quot; is a less common variant and should be avoided in formal writing.
        </p>
      </div>
    </div>
  );
} 