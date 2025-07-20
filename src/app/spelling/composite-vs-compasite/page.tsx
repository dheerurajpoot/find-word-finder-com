import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Composite or Compasite - Which is Correct? | Word Finder',
  description: 'Learn the correct spelling between &quot;composite&quot; and &quot;compasite&quot;. Discover definitions, usage examples, and common mistakes to avoid.',
}

export default function CompositeVsCompasitePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Composite or Compasite</h1>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
        <p className="text-lg md:text-xl text-blue-900 leading-relaxed">
          Understanding the difference between &quot;composite&quot; and &quot;compasite&quot; is essential for clear communication. 
          This guide will help you use the correct spelling in your writing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">❌</span>
              <h2 className="text-2xl font-bold text-red-900">Compasite</h2>
            </div>
            <p className="text-lg md:text-xl text-red-800 mb-4">
              <strong>Incorrect spelling</strong> - This word does not exist in English.
            </p>
            <p className="text-lg md:text-xl text-red-700">
              &quot;Compasite&quot; is a misspelling of &quot;composite&quot;. It is not a valid English word and should never be used.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">✅</span>
              <h2 className="text-2xl font-bold text-green-900">Composite</h2>
            </div>
            <p className="text-lg md:text-xl text-green-800 mb-4">
              <strong>Correct spelling</strong> - The proper way to spell this word.
            </p>
            <p className="text-lg md:text-xl text-green-700">
              &quot;Composite&quot; is the correct spelling, meaning made up of various parts or elements.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition of &quot;Composite&quot;</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            <strong>&quot;Composite&quot;</strong> (adjective): Made up of various parts or elements; combining different materials or components.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This word describes something that is formed by combining different parts, materials, or elements. 
            It is commonly used in engineering, materials science, mathematics, and everyday language.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Composite&quot;</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Combined</li>
                <li>• Mixed</li>
                <li>• Blended</li>
                <li>• Integrated</li>
                <li>• Assembled</li>
              </ul>
            </div>
            <div>
              <ul className="text-lg md:text-xl text-blue-800 space-y-2">
                <li>• Hybrid</li>
                <li>• Compound</li>
                <li>• Complex</li>
                <li>• Multifaceted</li>
                <li>• Heterogeneous</li>
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
              <strong>&quot;Correct:&quot;</strong> &quot;The <span className="text-green-600 font-semibold">&quot;composite&quot;</span> material is stronger than steel.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Incorrect:&quot;</strong> &quot;The <span className="text-red-600 font-semibold">compasite</span> material is stronger than steel.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>&quot;Correct:&quot;</strong> &quot;This is a <span className="text-green-600 font-semibold">&quot;composite&quot;</span> image made from several photographs.&quot;
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg md:text-xl text-gray-800">
              <strong>Correct:</strong> &quot;The <span className="text-green-600 font-semibold">composite</span> score reflects overall performance.&quot;
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-900">Notes:</h3>
        <ul className="text-lg md:text-xl text-yellow-800 space-y-3">
          <li>• &quot;Composite&quot; is spelled with &quot;pos&quot; in the middle, not &quot;pas&quot;</li>
          <li>• The word comes from Latin &quot;compositus&quot; meaning &quot;put together&quot;</li>
          <li>• Commonly used in technical and scientific contexts</li>
          <li>• Can function as both an adjective and a noun</li>
          <li>• The pronunciation is /kəmˈpɑzɪt/ (kuhm-PAH-zit)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is &quot;compasite&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              No, &quot;compasite&quot; is never correct. It is always a misspelling of &quot;composite&quot;. 
              There is no valid English word spelled as &quot;compasite&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">How do I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Think of &quot;composite&quot; as &quot;com&quot; + &quot;pos&quot; + &quot;ite&quot;. 
              The middle part is &quot;pos&quot; (like in &quot;position&quot; or &quot;positive&quot;), not &quot;pas&quot;. 
              Remember: composite = com + pos + ite.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the difference between composite and compound?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              &quot;Composite&quot; refers to something made up of different parts or materials, while &quot;compound&quot; 
              specifically refers to a chemical substance formed by combining elements. Both involve combination, but in different contexts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Can composite be used as a noun?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, &quot;composite&quot; can be used as both an adjective and a noun. 
              As a noun, it refers to a thing made up of several parts or elements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are common phrases with composite?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Common phrases include: &quot;composite material&quot;, &quot;composite image&quot;, &quot;composite score&quot;, 
              &quot;composite decking&quot;, and &quot;composite number&quot;.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Is there a verb form of composite?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Yes, the verb form is &quot;compose&quot;. 
              For example: &quot;The material is composed of several layers&quot; or &quot;The image was composed from multiple sources.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What&apos;s the plural form of composite?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              The plural form is &quot;composites&quot;. 
              Example: &quot;The study examined various composites for aerospace applications.&quot;
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Why do people misspell it as &quot;compasite&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              This misspelling likely occurs because people confuse it with words that have &quot;pas&quot; like &quot;passage&quot;, 
              &quot;passport&quot;, or &quot;passion&quot;. However, &quot;composite&quot; uses &quot;pos&quot; instead.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">What are some examples of composite materials?</h3>
            <p className="text-lg md:text-xl text-gray-700">
              Examples include fiberglass, carbon fiber, concrete, plywood, and many modern construction materials. 
              These are made by combining different materials to create properties that individual components don&apos;t have.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>Composite</strong> is the correct spelling, while <strong>compasite</strong> is always incorrect. 
          &quot;Composite&quot; is spelled with &quot;pos&quot; in the middle, not &quot;pas&quot;, and means made up of various parts or elements. 
          Use it when describing something that combines different materials, components, or elements. 
          This spelling mistake is common but easily avoidable by remembering the middle part is &quot;pos&quot; like in &quot;position&quot;.
        </p>
      </div>
    </div>
  )
} 