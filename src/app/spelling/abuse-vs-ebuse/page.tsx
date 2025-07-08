import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Abuse or Ebuse - Which is Correct?",
  description: "Learn the correct spelling between &apos;abuse&apos; and &apos;ebuse&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AbuseVsEbusePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Abuse or Ebuse</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Abuse or Ebuse, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Ebuse</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Ebuse&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Abuse</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Abuse&quot; means to mistreat or use improperly.
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
              <span className="font-bold">Abuse</span> (noun/verb): To treat with cruelty or violence; to use improperly or excessively; harmful treatment.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Child abuse is a serious crime that must be reported.</li>
              <li>He was accused of abusing his power as a manager.</li>
              <li>Drug abuse can have devastating consequences.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;abuse&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Mistreatment</li>
                  <li>Maltreatment</li>
                  <li>Exploitation</li>
                  <li>Misuse</li>
                  <li>Violence</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Verbs:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Mistreat</li>
                  <li>Exploit</li>
                  <li>Misuse</li>
                  <li>Harm</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Abuse&quot; is the correct spelling. &quot;Ebuse&quot; is a common misspelling—remember, it starts with &quot;A&quot; not &quot;E&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it ebuse or abuse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;abuse.&quot; &quot;Ebuse&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce abuse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈbjuːz/ (uh-BYOOZ) for the verb and /əˈbjuːs/ (uh-BYOOS) for the noun.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does abuse mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">To treat with cruelty or violence; to use improperly or excessively; harmful treatment.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are the different types of abuse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common types include physical abuse, emotional abuse, verbal abuse, sexual abuse, and substance abuse.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can abuse be used as both noun and verb?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes, &quot;abuse&quot; can be used as both a noun (the act of abusing) and a verb (to abuse someone or something).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between abuse and misuse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both involve improper use, but &quot;abuse&quot; often implies harm or cruelty, while &quot;misuse&quot; is more neutral.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is abuse always physical?</div>
              <div className="text-lg md:text-xl text-muted-foreground">No, abuse can be physical, emotional, verbal, psychological, or financial. It doesn&apos;t have to involve physical harm.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What should you do if you witness abuse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">If you witness abuse, especially involving children or vulnerable people, you should report it to appropriate authorities immediately.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can abuse be unintentional?</div>
              <div className="text-lg md:text-xl text-muted-foreground">While abuse is typically intentional, some forms of neglect or harmful behavior can be unintentional due to ignorance or lack of awareness.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the adjective form of abuse?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The adjective form is &quot;abusive&quot; - meaning characterized by abuse or cruelty.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 