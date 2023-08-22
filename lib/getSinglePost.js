
export default async function getSinglePost(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)

    if (!res.status===200) {
        throw new Error('Posts Error Problem');
    }
    return res.json();
};


