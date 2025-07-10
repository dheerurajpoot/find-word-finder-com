import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Assassination vs Assasination - Which is Correct? | Word Tips',
  description: 'Learn the correct spelling between "assassination" and "assasination". Discover the proper usage, definitions, and common mistakes to avoid.',
}

export default function AssassinationVsAssasinationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Assassination vs Assasination</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg inline-block">
          <p className="text-lg md:text-xl font-semibold">Which spelling is correct?</p>
        </div>
      </div>

      {/* Correct vs Incorrect Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">❌</span>
            <h2 className="text-2xl font-bold text-red-800">Incorrect</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-4">assasination</div>
            <p className="text-lg md:text-xl text-red-700">This spelling is incorrect and should not be used.</p>
          </div>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50 p-6">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">✅</span>
            <h2 className="text-2xl font-bold text-green-800">Correct</h2>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-green-600 mb-4">assassination</div>
            <p className="text-lg md:text-xl text-green-700">This is the correct spelling with double &quot;s&quot; and double &quot;n.&quot;</p>
          </div>
        </Card>
      </div>

      {/* Definition Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Definition</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Assassination (noun)</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The act of murdering someone, especially a prominent person, by a surprise attack, often for political or religious reasons. 
              It typically involves a planned, targeted killing carried out by a professional or someone with a specific agenda.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Examples:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>The <strong>assassination</strong> of President Kennedy shocked the nation.</li>
              <li>Several <strong>assassinations</strong> were attempted during the civil war.</li>
              <li>The <strong>assassination</strong> plot was discovered before it could be carried out.</li>
              <li>Historical records document many political <strong>assassinations</strong> throughout history.</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Why the Confusion */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Why the Confusion?</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            The confusion between &quot;assassination&quot; and &quot;assasination&quot; likely stems from:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phonetic pronunciation:</strong> The double &quot;s&quot; and double &quot;n&quot; sounds can be difficult to distinguish</li>
            <li><strong>Typographical errors:</strong> Missing letters when typing quickly</li>
            <li><strong>Complex spelling pattern:</strong> Multiple double consonants in the same word</li>
            <li><strong>Unfamiliar word:</strong> Not commonly used in everyday conversation</li>
            <li><strong>Similar word patterns:</strong> Some words have single consonants in similar positions</li>
          </ul>
        </div>
      </Card>

      {/* Etymology and Spelling Rules */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Etymology and Spelling Rules</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <p>
            <strong>Word origin:</strong> The word &quot;assassination&quot; comes from the verb &quot;assassinate,&quot; 
            which derives from the noun &quot;assassin,&quot; ultimately from the Arabic &quot;ḥashshāshīn.&quot;
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Spelling pattern:</h4>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Double &quot;s&quot; after &quot;a&quot;</li>
              <li>Single &quot;a&quot; in the middle</li>
              <li>Double &quot;s&quot; before &quot;i&quot;</li>
              <li>Double &quot;n&quot; before &quot;ation&quot;</li>
              <li>&quot;ation&quot; suffix for noun formation</li>
            </ul>
          </div>
          <p className="mt-4">
            <strong>Memory tip:</strong> Think of &quot;assassination&quot; as having two &quot;s&quot;s and two &quot;n&quot;s 
            because it involves a double act of killing (double &quot;s&quot; for &quot;secret&quot; and double &quot;n&quot; for &quot;night&quot;).
          </p>
        </div>
      </Card>

      {/* Synonyms */}
      <Card className="mb-8 p-6 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Synonyms for &quot;Assassination&quot;</h2>
        <div className="grid md:grid-cols-2 gap-4 text-lg md:text-xl">
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Formal:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>murder</li>
              <li>killing</li>
              <li>elimination</li>
              <li>execution</li>
              <li>slaying</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-blue-900">Contextual:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>targeted killing</li>
              <li>political murder</li>
              <li>contract killing</li>
              <li>hit</li>
              <li>liquidation</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Usage Tips</h2>
        <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">When to use &quot;assassination&quot;:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>In historical contexts about political killings</li>
              <li>In discussions about organized crime or terrorism</li>
              <li>In literature or fiction about professional killings</li>
              <li>In academic writing about political violence</li>
              <li>In news reports about targeted killings</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Common contexts:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Historical accounts</li>
              <li>Political discussions</li>
              <li>Crime fiction and literature</li>
              <li>Academic research</li>
              <li>International relations</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* FAQ Section */}
      <Card className="mb-8 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is &quot;assasination&quot; ever correct?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: No, &quot;assasination&quot; is never correct in standard English. It is always a spelling error for &quot;assassination.&quot;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: What&apos;s the pronunciation of &quot;assassination&quot;?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: It is pronounced as /əˌsæsɪˈneɪʃən/ with the stress on the fourth syllable. The double &quot;s&quot; is pronounced as a single &quot;s&quot; sound.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Are there related words with similar spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, &quot;assassinate&quot; (the verb) and &quot;assassin&quot; (the person who carries out the assassination) 
              also have the same double &quot;s&quot; and double &quot;n&quot; pattern.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: How can I remember the correct spelling?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Remember that &quot;assassination&quot; has two &quot;s&quot;s and two &quot;n&quot;s. Think of it as 
              &quot;as + sas + sin + ation&quot; or use the memory trick: an assassin needs to be &quot;double&quot; careful 
              (hence double letters) when carrying out an assassination.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Q: Is this a common spelling mistake?</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              A: Yes, this is a relatively common spelling error, especially since it&apos;s not a frequently used word 
              and has an unusual spelling pattern with multiple double consonants.
            </p>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Summary</h2>
        <p className="text-lg md:text-xl text-green-800 leading-relaxed">
          <strong>&quot;Assassination&quot;</strong> is the correct spelling with double &quot;s&quot; and double &quot;n.&quot; 
          The spelling &quot;assasination&quot; is incorrect and should never be used. This word comes from the verb &quot;assassinate&quot; 
          and maintains its complex spelling pattern. Remember that &quot;assassination&quot; has two &quot;s&quot;s and two &quot;n&quot;s 
          because it involves a double act of stealth and killing, followed by the &quot;-ation&quot; noun suffix.
        </p>
      </div>
    </div>
  )
} 