import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Compatible or Compatable - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;compatible&quot; and &quot;compatable&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompatibleVsCompatablePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Compatible or Compatable</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;compatible&quot; and &quot;compatable&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compatable</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compatable&quot; is a misspelling of &quot;compatible&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Compatible</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Compatible&quot; is the correct spelling, meaning able to exist or work together without conflict.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of Compatible</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>Compatible</strong> (adjective): Able to exist or work together without conflict; capable of being used together.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes things that can work together harmoniously or be used together without problems. 
            It is commonly used in technology, relationships, and various other contexts where compatibility is important.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for Compatible</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Harmonious</li>
                <li>• Suitable</li>
                <li>• Matching</li>
                <li>• Consistent</li>
                <li>• Agreeable</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Congruent</li>
                <li>• Aligned</li>
                <li>• Cooperative</li>
                <li>• Complementary</li>
                <li>• Interoperable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Examples</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;This software is <span className="text-green-600 font-semibold">compatible</span> with Windows and Mac.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Incorrect:</strong> &quot;This software is <span className="text-red-600 font-semibold">compatable</span> with Windows and Mac.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;Their personalities are <span className="text-green-600 font-semibold">compatible</span> and they work well together.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;The new device is <span className="text-green-600 font-semibold">compatible</span> with existing systems.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Compatible&quot; is spelled with &quot;ible&quot; at the end, not &quot;able&quot;</li>
          <li>• The word comes from Latin &quot;compatibilis&quot; meaning &quot;that can be endured&quot;</li>
          <li>• Commonly used in technology, relationships, and systems</li>
          <li>• The opposite is &quot;incompatible&quot;</li>
          <li>• The pronunciation is /kəmˈpætəbəl/ (kuhm-PAT-uh-buhl)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compatable&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compatable&quot; is never correct. It is always a misspelling of &quot;compatible&quot;. 
              There is no valid English word spelled as &quot;compatable&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;compatible&quot; as &quot;compat&quot; + &quot;ible&quot;. 
              The ending is &quot;ible&quot; (like in &quot;possible&quot;, &quot;visible&quot;, &quot;flexible&quot;), not &quot;able&quot;. 
              Remember: compatible ends with &quot;ible&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between compatible and suitable?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Compatible&quot; specifically refers to things that can work together without conflict, while &quot;suitable&quot; 
              means appropriate or fitting for a particular purpose. Compatibility is about harmony, suitability is about appropriateness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can compatible be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compatible&quot; is only an adjective. The noun form is &quot;compatibility&quot;. 
              For example: &quot;The compatibility of these systems is excellent.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with compatible?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;backward compatible&quot;, &quot;forward compatible&quot;, &quot;compatible with&quot;, 
              &quot;compatible devices&quot;, and &quot;compatible software&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there an adverb form of compatible?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the adverb form is &quot;compatibly&quot;. 
              For example: &quot;The systems work compatibly together&quot; or &quot;They function compatibly.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the opposite of compatible?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The opposite is &quot;incompatible&quot;. 
              Example: &quot;These devices are incompatible with each other&quot; or &quot;The software is incompatible with the operating system.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;compatable&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that end in &quot;able&quot; like &quot;capable&quot;, 
              &quot;available&quot;, or &quot;comfortable&quot;. However, &quot;compatible&quot; uses &quot;ible&quot; instead.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What does backward compatible mean?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Backward compatible&quot; means that a newer version of something can work with older versions. 
              For example, a new software version that can still read files created by older versions is backward compatible.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Compatible</strong> is the correct spelling, while <strong>compatable</strong> is always incorrect. 
          &quot;Compatible&quot; is spelled with &quot;ible&quot; at the end, not &quot;able&quot;, and means able to exist or work together without conflict. 
          Use it when describing things that can work together harmoniously. 
          This spelling mistake is common but easily avoidable by remembering that it ends with &quot;ible&quot; like other similar words.
        </p>
      </div>
    </div>
  )
} 