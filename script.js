var prof = 1;

function swapProfile()
{
	if (prof == 1)
	{
		document.getElementById("img").src = "profile2.jpg";
	}
	else if (prof == 2)
	{
		document.getElementById("img").src = "profile3.jpg";
	}
	else
	{
		document.getElementById("img").src = "profile1.jpg";
		prof = 0;
	}
	prof++;
}